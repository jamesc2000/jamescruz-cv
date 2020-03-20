var uncollapse = document.getElementsByClassName('uncollapse-container');
var uncollapseStatus
var toggle = true;

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
        triggerToggle();
        this.nextElementSibling.className = uncollapseStatus;
    });
}

