all: 
	xsltproc -o test.html /usr/share/xml/docbook/stylesheet/nwalsh/xhtml/docbook.xsl curriculum.docbook.xml  

chunk:
	xsltproc -o test.html /usr/share/xml/docbook/stylesheet/docbook-xsl/xhtml/chunk.xsl curriculum.docbook.xml
