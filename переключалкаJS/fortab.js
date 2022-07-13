const nav = document.querySelectorAll(".nav");
const allTabs = document.querySelectorAll(".tabs-content");

nav.forEach(function (item) {
    item.addEventListener("click", function() {

        let tabId = item.getAttribute("data-tab");
        console.log(tabId);
        let currentTab = document.querySelector(tabId);

        if (!item.classList.contains('active')) {
            nav.forEach(function (item) {
                item.classList.remove('active');
            });

            allTabs.forEach(function (item) {
                item.classList.remove('active');
            });

            item.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});