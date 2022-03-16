# W02D03 - Networking with TCP and HTTP

### To Do
- [x] Discuss networking and the need for protocols
- [x] TCP introduction
- [x] TCP demo
- [x] HTTP fundamentals


### Networking
* computers connected together
* any machine on the network can talk to any other machine
* CERN to share documents

### Protocols
* define how two machines will communicated together

### Internet Protocol (IP)
* gives everyone an address (street address)
* two flavours
  * IPv4 - 127.0.0.1, 192.68.84.184, 256 ^ 4
  * IPv6 - 001:db8:3333:4444:5555:6666:7777:8888
  * June 6th IPv6 Day

DNS Domain Name Servers - www.google.com => 67.73.30.125 => make request to that

Subnet 1 outward facing IP address

### Ports
* identify where the process is running
* 65,535 ports to choose from
  * 80 HTTP
  * 443 HTTPS
  * 22 SSH
  * 5432 Postgres
  * 3000, 3001, 8000, 8001

### Transport layer protocols
* TCP
  * secure handshake (3 way handshake)
  * lossless protocol
* UDP
  * connectionless
  * lossfull protocol

* Packets (little trucks) - each message is broken up into smaller segments


Servers - have information
Clients - want information


### HTTP
* HyperText Transfer Protocol (HyperText Markup Language HTML)
* HTTP sits on top of TCP
* Request Response cycle
* Stateless - it is not required to remember ANY previous conversation (cookies)

### HTTP Request
* host and port
* Verb/Action - describes what we want to do
  * GET => retrieve information
  * POST => send user info to the server
* URL/path - describes what we want to do it to
  * /users
  * /cars/7
  * /dinosaurs

REST

### HTTP Response
* may or may not have info/payload/body (any data type: JSON, .jpg, .gif, .mpeg)
* status code
  * 404
  * 200
  * 503/500
  * 405?
  * 401

1xx => routing codes
2xx => everything is great
3xx => redirection
4xx => wrong with the request
5xx => something wrong with the server

HTTP: Request

      Server <------- TCP ---------> Client


