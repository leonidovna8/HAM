const tabsMenu = document.querySelectorAll('.table-menu-item');
const tabsContent = document.querySelectorAll('.table-content-item');
tabsMenu.forEach(tab => {
    tab.addEventListener('click', () => {
      const activeTab = document.querySelector('.table-menu-item.active');
      const activeContent = document.querySelector('.table-content-item.active');
      console.log(activeTab);
      console.log(activeContent);
  
      activeTab.classList.remove('active');
      tab.classList.add('active');
      activeContent.classList.remove('active');
  
      tabsContent.forEach(content => {
        if (content.dataset.serviceContent === tab.dataset.serviceItem) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
    });
  });