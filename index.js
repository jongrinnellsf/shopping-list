

function removeItem(){
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });
};

function completeItem() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
};

function addNewItem(){
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const userItem = $(this).find('#shopping-list-entry').val();
        $('#shopping-list-entry').val('')
        $('ul').append(
            $(`<li>
            <span class="shopping-item">${userItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`
        ));
    });
};

$(addNewItem);
$(removeItem);
$(completeItem);

