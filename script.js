var uncollapse = document.getElementsByClassName('uncollapse-container');

function triggerToggle()
{
    if (toggle) {
        uncollapseStatus = 'collapsed';
        toggle = !toggle;
    } else {
        uncollapseStatus = 'uncollapsed';
        toggle = !toggle;  
    }    
}

// add event listeners to all uncollapse-containers
for (let i = 0; i < uncollapse.length; i++) {
    uncollapse[i].addEventListener("click", function() {
        if (this.nextElementSibling.className === 'uncollapsed') {
            this.nextElementSibling.className = 'collapsed';
            this.nextElementSibling.style.maxHeight = 0;
        } else {
            this.nextElementSibling.className = 'uncollapsed';
            this.nextElementSibling.style.maxHeight = 'fit-content';
        }
    });
}

