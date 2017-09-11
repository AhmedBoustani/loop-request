# http-loop :construction:

Send an HTTP request in a loop

## Usage

```
http-loop init  
http-loop [method] [url] [num-iterations]   
http-loop [--options]
```
set necessary input in the input/ directory

### Arguments:
```
init              Initializes the work directory called http-loop,
                    which contains the input files
[method]          Request method: GET, POST, or PUT (case insensitive)
[url]             The url of the request
[iterations]      The number of times to send the request (default 1)
```

### Options:
```
--help, -h        help
--clear-logs,     delete files in logs/ directory
  -clr
--head            print the last log registered
```
### Help
`node index.js --help` or `-h`

### Input
Insert necessary data in the `http-loop/input/` directory.

`body.json`: body of the request (array)  
`headers.json`: headers of the request  
`params.json`: the query of the request

## TODO:
- write better documentation
- add linter and setup .editorconfig for future updates
