# Ajax Pagination

Make any pagination AJAX without changing anything.

## How to setup



### Define following options:

```js
// Wrapper for record table or list
tableBody: '.data_tbody'

// Wrapper for pagination links
paginationWrapper: '.pagination_wrapper'

// Link class for pagination link
paginationLink: '.pagination_link'

// Complete call
ajaxPagination({ 
    tableBody: '.body_cont', 
    paginationLink: '.page-link',  
    paginationWrapper: '.pagination_wrapper' 
});
```

### Data Table HTML "body_cont"

``` html
<table class="table table-bordered" id="dataTable1" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Date Created</th>
                            <th>Date Modified</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Date Created</th>
                            <th>Date Modified</th>
                            
                        
                        </tr>
                    </tfoot>
                    <tbody class="body_cont">

                                                    
                      
                        <tr>
                            <td>1</td>
                            <td>MR</td>
                            <td>rizwan chand </td>
                            <td> 2021-06-07 21:03:53</td>
                            <td>2021-06-07 21:03:53</td>
                            
                        </tr>

                                              
                    </tbody>
                </table>

```

### Pagination wrapper and pagination link 

``` html

<div class="pagination_wrapper">
          
        <ul class="pagination">
           
            <li class="page-item"><a class="page-link" href="http://127.0.0.1:8000/admin/post?page=1">1</a></li>
            <li class="page-item"><a class="page-link" href="http://127.0.0.1:8000/admin/post?page=2">2</a></li>
            <li class="page-item active" aria-current="page"><span class="page-link">3</span></li>
              
           </ul>
    
</div>

```
## Browser support

Ajax Pagination works with all modern browsers that support:
- ES6 features (spread operator, const/let)
- Fetch API
- DOMParser

**Minimum browser versions:**
- Chrome 45+
- Firefox 34+
- Safari 10+
- Edge 12+

**Note:** Does not work with Internet Explorer. For IE support, consider using polyfills for fetch API and ES6 features.

---

[MIT license](https://desandro.mit-license.org/). Have at it.
