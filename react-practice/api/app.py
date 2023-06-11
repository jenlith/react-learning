import sys
import cgi
from http.server import HTTPServer, BaseHTTPRequestHandler
# My Port: 54108
import io  # TextIOWrapper
import urllib  # code to parse for data

class MyHandler(BaseHTTPRequestHandler):
    def call_one (self, text):
        content_type = 'text/html'
        content = 'n/a'
        if text == 'hi':
            content_type = 'text/html'
            content = 'hi'
        # send response
        self.send_response(200)  # OK
        self.send_header("Content-type", content_type)
        self.send_header("Content-length", len(content))
        self.end_headers()
        self.wfile.write(bytes(content, "utf-8"))

    def do_GET (self) :
        if self.path == '/api':
            call_one('hello')

try:
    # start server
    # httpd = HTTPServer(('localhost', int(sys.argv[1])), MyHandler)
    httpd = HTTPServer(('localhost', 8000), MyHandler)
    httpd.serve_forever()
# https://stackoverflow.com/questions/59477280/creating-a-simple-http-python-server-to-handle-broken-pipe
except KeyboardInterrupt:
    # ("\nCommand '^C' received, shutting down server.")
    httpd.socket.close()
