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
            paginationLink: '.pagination_link',
            loadingClass: 'ajax-pagination-loading',
            disableLinksOnLoad: true
        }

        // Validate options parameter
        if (!options || typeof options !== 'object') {
            console.error('Ajax Pagination: options parameter must be an object');
            return;
        }

        options = {
            ...defaultOptions,
            ...options
        };

        //console.log(options);
        const tableBodyObj = document.querySelector(options.tableBody);

        if (!tableBodyObj) {
            console.error(options.tableBody, ' - unable to select data table or list wrapper');
            return;
        }

        const paginationLinkObj = document.querySelector(options.paginationLink);

        if (!paginationLinkObj) {
            console.error(options.paginationLink, ' - unable to select pagination links');
        }

        document.addEventListener('click', function (event) {

            if (!event.target.matches(options.paginationLink)) return;

            event.preventDefault();

            const paginationHref = event.target.getAttribute('href');
            if (!paginationHref || paginationHref === '#') {
                return;
            }

            // Start loading state
            const targetTableBody = document.querySelector(options.tableBody);
            const targetPaginationWrapper = document.querySelector(options.paginationWrapper);
            const allPaginationLinks = document.querySelectorAll(options.paginationLink);

            // Add loading class to table body and pagination wrapper
            if (targetTableBody && options.loadingClass) {
                targetTableBody.classList.add(options.loadingClass);
            }
            if (targetPaginationWrapper && options.loadingClass) {
                targetPaginationWrapper.classList.add(options.loadingClass);
            }

            // Disable pagination links if option is enabled
            if (options.disableLinksOnLoad) {
                allPaginationLinks.forEach(link => {
                    link.style.pointerEvents = 'none';
                    link.setAttribute('aria-disabled', 'true');
                });
            }
            
            fetch(paginationHref, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'text/html',
                    }
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(data => {

                    // console.log(options);
                    const parser = new DOMParser();
                    const body = parser.parseFromString(data, "text/html");
                    const newTableBodyObj = body.querySelector(options.tableBody);

                    if (newTableBodyObj) {
                        document.querySelector(options.tableBody).innerHTML = newTableBodyObj.innerHTML;
                    }

                    const paginationWrapperObj = body.querySelector(options.paginationWrapper);
                    if (paginationWrapperObj) {
                        document.querySelector(options.paginationWrapper).innerHTML = paginationWrapperObj.innerHTML;
                    }

                })
                .catch((error) => {
                    console.error('Ajax Pagination Error:', error);
                })
                .finally(() => {
                    // End loading state
                    const currentTableBody = document.querySelector(options.tableBody);
                    const currentPaginationWrapper = document.querySelector(options.paginationWrapper);
                    const currentPaginationLinks = document.querySelectorAll(options.paginationLink);

                    // Remove loading class
                    if (currentTableBody && options.loadingClass) {
                        currentTableBody.classList.remove(options.loadingClass);
                    }
                    if (currentPaginationWrapper && options.loadingClass) {
                        currentPaginationWrapper.classList.remove(options.loadingClass);
                    }

                    // Re-enable pagination links
                    if (options.disableLinksOnLoad) {
                        currentPaginationLinks.forEach(link => {
                            link.style.pointerEvents = '';
                            link.removeAttribute('aria-disabled');
                        });
                    }
                });

        }, false);

    }

    return init;

})();
