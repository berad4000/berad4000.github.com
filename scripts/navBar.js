
(function () {
  'use strict';
      window.trace = function (msg){ console.log( "LOG: " + msg );};

      var currentSelectedTab = 0;
      var tabSelectionBg = document.querySelector('.tab-selected-bg');
      var bgRect = tabSelectionBg.getBoundingClientRect();
      var tabBtns = document.querySelectorAll('.tab-bar > .tab-btn');

      for(var i = 0; i < tabBtns.length; i++) {
        tabBtns[i].addEventListener('click', onTabClick(i, tabBtns[i]), true);
      }

      function onTabClick(index, btn) {
        return function(e) {
          currentSelectedTab = index;
          selectTab(btn); 
        };
      }

      function selectTab(tabBtn) {
        
        var currentTab = document.querySelector('.tab-bar > .tab-btn.selected');
        
        if(currentTab) {
          currentTab.classList.remove('selected');
          var contentClassName = getContentClassname(currentTab);
          var sectionClass = document.querySelector('.'+contentClassName);
          //sectionClass.classList.remove('selected');
        }
        tabBtn.classList.add('selected');

        var clientRect = tabBtn.getBoundingClientRect();

        var center = {
          x: clientRect.left + (clientRect.width / 2),
          y: clientRect.top + (clientRect.height / 2)
        };

        var translateX = 'translateX('+(center.x - (bgRect.width / 2))+'px) translateY(6px)';

        tabSelectionBg.style.msTransform = translateX;
        tabSelectionBg.style.MozTransform = translateX;

        tabSelectionBg.style.webkitTransform = translateX;
        tabSelectionBg.style.tranform = translateX;

        var contentClassName = getContentClassname(tabBtn);
        trace( contentClassName );

        if ( contentClassName != 'info-tab-content' ) window.location.href = '/story';
          

        var sectionClass = document.querySelector('.'+contentClassName);
        //sectionClass.classList.add('selected');
      
      }

      function getContentClassname(tabBtn) {
        if(tabBtn.dataset) {
          return tabBtn.dataset.tabsection;
        } else {
          return tabBtn.getAttribute('data-tabsection');
        }
      }

      selectTab(tabBtns[currentSelectedTab]);

      window.addEventListener('load', function() {
        tabSelectionBg.classList.add('initialised');  
      });

      window.onresize = function() {
       selectTab(tabBtns[currentSelectedTab]);
      };

      var tabBtns = document.querySelectorAll('.tab-bar > button');
      for(var i = 0; i < tabBtns.length; i++) {
        tabBtns[i].addEventListener('click', tabBarBtnClick, true);
      }

      function tabBarBtnClick() {
      //  sampleCompleted('tabbar-sample2.html-tabbtnclick');
      }


})();
