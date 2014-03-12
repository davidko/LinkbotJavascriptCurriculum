#!/usr/bin/env python

import sys
import xml.etree.ElementTree as etree

def main():
  if len(sys.argv) != 2:
    print('Usage: {0} <curriculum_file.xml>'.format(sys.argv[0]))
    return

  h = Book()
  h.parse(sys.argv[1])
  h.write()

class Page():
  def __init__(self, title="title", filename="out.html"):
    self.root = etree.Element('html')
    self.head = etree.SubElement(self.root, 'head')
    self.title = etree.SubElement(self.head, 'title')
    self.title.text = title
    self.body = etree.SubElement(self.root, 'body')
    self.filename = filename

class Book():
  def __init__(self, hostname = None):
    self.mainPage = Page()
    self.title = ''
    self.chapters = []

    self.chapterNum = 0
    self.figNum = 0

    self.sectionDepth = 0
    self.sectionCount = [0, 0, 0, 0, 0]

  def parse(self, filename):
    self.tree = etree.parse(filename)
    root = self.tree.getroot()
#self.parseFuncs[root.tag](None, root)
    getattr(self, '_parseTag_' + root.tag)(None, root)

  def write(self):
    for c in self.chapters:
      t = etree.ElementTree(c.root)
      t.write(c.filename)

  def _call_parseFunc(self, parent, elem):
    try:
      #print('BEGINPARSE: {0}'.format(elem.tag))
      getattr(self, '_parseTag_' + elem.tag)(parent, elem)
      #print('PARSE: {0}'.format(elem.tag))
    except Exception as e:
      #print(e)
      parent.append(elem)
      #print('PARSEPASS: {0}'.format(elem.tag))

  def _parseTag_book(self, parent, elem):
    self.mainPage.title.text = elem.attrib['title']
    self.title = elem.attrib['title']
    for child in elem:
      self._call_parseFunc(self.mainPage.body, child)

  def _parseTag_chapter(self, parent, elem):
    self.chapterNum += 1
    self.chapters.append(Page(title='Chapter '+str(self.chapterNum), 
          filename='chapter'+str(self.chapterNum)+'.html'))
    parent = self.chapters[-1].body
    header = etree.SubElement(parent, 'h1')
    self.sectionDepth = 0;
    self.sectionCount = [0]*len(self.sectionCount)
    header.text = 'Chapter ' + str(self.chapterNum) + ': ' + elem.attrib['title']
    for child in elem:
      self._call_parseFunc(parent, child)

  def _parseTag_section(self, parent, elem):
    header = etree.SubElement(parent, 'h' + str(self.sectionDepth+2))
    self.sectionCount[self.sectionDepth] += 1
    self.sectionDepth += 1
    self.sectionCount[self.sectionDepth:] = [0]*(len(self.sectionCount)-self.sectionDepth)
    header.text = 'Section ' + str(self.chapterNum)
    for i in range(self.sectionDepth):
      header.text += '.' + str(self.sectionCount[i])
    if 'title' in elem.attrib:
      header.text += ': ' + elem.attrib['title']
    for child in elem:
      self._call_parseFunc(parent, child)
    self.sectionDepth -= 1

  def _parseTag_p(self, parent, elem):
    e = etree.SubElement(parent, 'p')
    e.text = elem.text
    for child in elem:
      self._call_parseFunc(parent, child)

  def _parseTag_figure(self, parent, elem):
    figure = etree.SubElement(parent, 'figure')
    img = etree.SubElement(figure, 'img')
    img.attrib['src'] = elem.text
    caption = etree.SubElement(figure, 'figcaption')
    caption.text = 'Figure ' + str(self.chapterNum)
    for i in range(self.sectionDepth):
      caption.text += '.' + str(self.sectionCount[i])
    self.figNum += 1
    caption.text += '.' + str(self.figNum)
    if 'caption' in elem.attrib:
      caption.text += ': ' + elem.attrib['caption']

  def _parseTag_figref(self, parent, elem):
    pass

  def _parseTag_question(self, parent, elem):
    pass

  def _parseTag_answer(self, parent, elem):
    pass
      

if __name__ == "__main__":
  main()
