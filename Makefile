all: 
	xsltproc -xinclude -o test.html /usr/share/xml/docbook/stylesheet/nwalsh/xhtml/docbook.xsl curriculum.docbook.xml  

chunk:
	xsltproc -xinclude -o test.html /usr/share/xml/docbook/stylesheet/docbook-xsl/xhtml/chunk.xsl curriculum.docbook.xml
