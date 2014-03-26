STYLESHEETS=/usr/share/xml/docbook/stylesheet/docbook-xsl/highlighting/xslthl-config.xml

all: 
	xsltproc -xinclude -o test.html mystylesheet.xml curriculum.docbook.xml  

chunk:
	xsltproc -xinclude -o test.html /usr/share/xml/docbook/stylesheet/docbook-xsl/xhtml/chunk.xsl curriculum.docbook.xml

saxon:
	/usr/bin/java -cp "/usr/share/java/saxon.jar:/usr/share/java/xslthl.jar" \
		-Dxslthl.config="file:///usr/share/xml/docbook/stylesheet/docbook-xsl/highlighting/xslthl-config.xml" \
		com.icl.saxon.StyleSheet \
		-o index.html \
		curriculum.docbook.xml \
		mystylesheet.xml 
