#!/usr/bin/env python

import sys
import xml.etree.ElementTree as etree

def main():
  if len(sys.argv) != 2:
    print('Usage: {0} <curriculum_file.xml>'.format(sys.argv[0]))
    return

class HTMLElement():
  def __init__(self):
    self.root = etree.Element('html')
    self.head = etree.SubElement(self.root, 'head')
    self.title = etree.SubElement(self.head, 'title')
    self.body = etree.SubElement(self.root, 'body')
    self.tags = ['book', 'chapter', 'section', 'subsection', 
                 'p', 'figure', 'figref', 'question', 'answer']
    self.parseFuncs = {}
    for t in self.tags:
      self.parseFuncs[t] = getattr(self, '_parseTag_'+t)

  def parse(self, filename):
    self.tree = etree.parse(filename)
    root = self.tree.getroot()
    self.parseFuncs[root.tag](None, root)

  def _parseTag_book(self, parent, elem):
    self.title.text = elem['title']
    for child in elem:
      self.parseFuncs[child.tag](self.body, child)

  def _parseTag_chapter(self, parent, elem):
    header = etree.SubElement(parent, 'h1')
    header.text = elem.text
    for child in elem:
      self.parseFuncs[child.tag](parent, child)

  def _parseTag_section(self, parent, elem):
    header = etree.SubElement(parent, 'h2')
    header.text = elem.text
    for child in elem:
      self.parseFuncs[child.tag](parent, child)

  def _parseTag_subsection(self, parent, elem):
    header = etree.SubElement(parent, 'h3')
    header.text = elem.text
    for child in elem:
      self.parseFuncs[child.tag](parent, child)

  def _parseTag_subsubsection(self, parent, elem):
    header = etree.SubElement(parent, 'h4')
    header.text = elem.text
    for child in elem:
      self.parseFuncs[child.tag](parent, child)

  def _parseTag_p(self, parent, elem):
    e = etree.SubElement(parent, 'p')
    e.text = elem.text
    for child in elem:
      self.parseFuncs[child.tag](e, child)

  def _parseTag_figure(self, parent, elem):
    pass

  def _parseTag_figref(self, parent, elem):
    pass

  def _parseTag_question(self, parent, elem):
    pass

  def _parseTag_answer(self, parent, elem):
    pass
      

if __name__ == "__main__":
  main()
