# Ajax Pagination
Make any pagination AJAX without changing anything.



## How to setup

- include javascript file

### Define following options:

``` js
// Wrapper for record table or list

tableBody: '.data_tbody'
    
    
// Wrapper for wrapper for pagination links

paginationWrapper: '.pagination_wrapper'
    
    
// link class for pagination link


paginationLink: '.pagination_link'


// complete call

ajaxPagination({ tableBody:'.body_cont', paginationLink:'.page-link',  paginationWrapper :'.pagination_wrapper', });


```



## Browser support

Ajax Pagination works with all modern browsers. It doesn't work with Internet Explorer.






---

[MIT license](https://desandro.mit-license.org/). Have at it.
