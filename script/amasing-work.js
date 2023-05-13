const workList = document.querySelector('.amazing-work-menu');

function filter() {
    const listItems = document.querySelectorAll('.work-menu-item');
    workList.addEventListener('click', ev => {
        const targetId = ev.target.dataset.id
        const target = ev.target

        if (target.classList.contains('work-menu-item')) {
            listItems.forEach(listItem => listItem.classList.remove('active'))
            target.classList.add('active')
        }

        switch (targetId) {
            case 'all-photo':
                getWorkItems('work-photo-item', true)
                break
            case 'graphic-design':
                getWorkItems(targetId)
                break
            case 'web-design':
                getWorkItems(targetId)
                break
            case 'landing-pages':
                getWorkItems(targetId)
                break
            case 'wordpress':
                getWorkItems(targetId)
                break
        }
    })
}

filter()

function getWorkItems(className) {
    const workItems = document.querySelectorAll('.work-photo-item');
    workItems.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })

}

function addRow() {
    const workBlocks = document.querySelector('.amazing-work-blocks');
    const workBlocksRow = document.querySelector('.amazing-blocks-row').cloneNode(true);
    const workGraphic = workBlocksRow.querySelector('.graphic-design');
    const workWeb = workBlocksRow.querySelector('.web-design');
    const workLanding = workBlocksRow.querySelector('.landing-pages');
    const workWordpress = workBlocksRow.querySelector('.wordpress');

    workWeb.querySelector('img').src = `./img/graphic-design/graphic${workBlocks.children.length + 1}.jpg`;
    workWeb.querySelector('img').src = `./img/web-design/web${workBlocks.children.length + 1}.jpg`;
    workLanding.querySelector('img').src = `./img/landing-pages/landing${workBlocks.children.length + 1}.jpg`;
    workWordpress.querySelector('img').src = `./img/wordpress/wordpress${workBlocks.children.length + 1}.jpg`;

    workBlocks.appendChild(workBlocksRow);
}

for (i = 0; i < 2; i++) addRow();

const buttonWork = document.querySelector('.button-load-work');

buttonWork.addEventListener('click', ev => {
    ev.preventDefault();
    buttonWork.style.display = 'none';
    for (i = 0; i < 3; i++) addRow();
})
