$(function(){
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
        event.stopPropagation();
        $(this).closest('.shopping-item-controls').prevAll('.shopping-item').toggleClass('shopping-item__checked');
    })
})

$(function(){
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        const ent = $(this).find('#shopping-list-entry');

        $('ul').append(`<li>
        <span class="shopping-item">${ent.val()}</span><div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
      ent.val("");

    })
})

$(function(){
    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
        event.stopPropagation();
        $(this).closest('li').remove();
    })
})
