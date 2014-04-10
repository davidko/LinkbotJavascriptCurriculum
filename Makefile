STYLESHEETS=/usr/share/xml/docbook/stylesheet/docbook-xsl/highlighting/xslthl-config.xml
all: saxon-chunk saxon

xsltproc: 
	xsltproc -xinclude -o test.html mystylesheet.xml curriculum.docbook.xml  

chunk:
	xsltproc -xinclude -o test.html /usr/share/xml/docbook/stylesheet/docbook-xsl/xhtml/chunk.xsl curriculum.docbook.xml

saxon:
	/usr/bin/java -cp "/usr/share/java/saxon.jar:/usr/share/java/xslthl.jar" \
		-Dxslthl.config="file:///usr/share/xml/docbook/stylesheet/docbook-xsl/highlighting/xslthl-config.xml" \
		com.icl.saxon.StyleSheet \
		-o html/single_page_index.html \
		curriculum.docbook.xml \
		mystylesheet.xml \
		html.stylesheet=barobostyle.css 

saxon-chunk:
	/usr/bin/java -cp "/usr/share/java/saxon.jar:/usr/share/java/xslthl.jar" \
		-Dxslthl.config="file:///usr/share/xml/docbook/stylesheet/docbook-xsl/highlighting/xslthl-config.xml" \
		com.icl.saxon.StyleSheet \
		-o chunkout \
		curriculum.docbook.xml \
		mychunkstylesheet.xml \
		html.stylesheet=barobostyle.css \
		chunk.section.depth=2 \
		chunk.first.sections=1
	mv *.html html

saxon9:
	/usr/bin/java -jar ~/.local/share/java/saxon9he.jar curriculum.docbook.xml mychunkstylesheet.xml

saxon-chunk-hlh:
	/usr/bin/java -cp "/usr/share/saxon-6.5/lib/saxon.jar:./xslthl.jar" \
		-Dxslthl.config="file:///usr/share/sgml/docbook/xsl-stylesheets/highlighting/xslthl-config.xml" \
		com.icl.saxon.StyleSheet \
		-o chunkout \
		curriculum.docbook.xml \
		mychunkstylesheet.xml \
		html.stylesheet=barobostyle.css \
		chunk.section.depth=2 \
		chunk.first.sections=1
	mv *.html html

