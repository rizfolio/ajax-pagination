/**
 * Ajax Pagination 
 * 0.1 beta version
 * (c) 2021 Rizwan Chand
 * www.rizfolio.com
 * https://github.com/rizfolio/ajax-pagination
 * MIT license
 */

var ajaxPagination = (function () {

    'use strict';

    var init = function (options) {

        var defaultOptions = {
            tableBody: '.data_tbody',
            paginationWrapper: '.pagination_wrapper',
            paginationLink: '.pagination_link'
        }

        options = {
            ...defaultOptions,
            ...options
        };

        //console.log(options);
        let tableBodyObj = document.querySelector(options.tableBody);

        if (!tableBodyObj) {
            console.error(options.tableBody, ' - unable to select data table or list wrapper');
            return;
        }

        let paginationLinkObj = document.querySelector(options.paginationLink);

        if (!paginationLinkObj) {
            console.log(options.paginationLink, ' - unable to select pagination links');
        }

        document.addEventListener('click', function (event) {

            if (!event.target.matches(options.paginationLink)) return;

            event.preventDefault();

            let paginationHref = event.target.getAttribute('href');
            if (!paginationHref) {
                return;
            }
            fetch(paginationHref, {
                    method: 'GET', // or 'PUT'
                    headers: {
                        'Content-Type': 'text/html',
                    }
                })
                .then(response => response.text())
                .then(data => {

                    // console.log(options);
                    const parser = new DOMParser();
                    const body = parser.parseFromString(data, "text/html");
                    var tableBodyObj = body.querySelector(options.tableBody);

                    document.querySelector(options.tableBody).innerHTML = tableBodyObj.innerHTML;

                    var paginationWrapperObj = body.querySelector(options.paginationWrapper);
                    if (paginationWrapperObj)
                        document.querySelector(options.paginationWrapper).innerHTML = paginationWrapperObj.innerHTML;

                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        }, false);

    }

    return init;

})();
