$(document).ready(function() {	
    var codes = {
    'juice': {
        name: 'juice',
        unitPrice: '$ 6'
    },
    'bacon': {
        name: 'bacon',
        unitPrice: '$ 5'
    },
    'tuna': {
        name: 'tuna',
        unitPrice: '$ 7' 
    },
    'burgers': {
        name: 'burgers',
        unitPrice: '$ 4' 
    },
    'wings': {
        name: 'wings',
        unitPrice: '$ 4'
    },
    'cheese': {
        name: 'cheese',
        unitPrice: '$ 2'
    },
    'apples': {
        name: 'apples',
        unitPrice: '$ 3' 
    }
}
    $('#btn_AddToList').click(function () {                                           
 	$('.fullTable').append('<tr><td class="product"></td><td>'+codes[$('#list1').val()].name+'</td><td class="price">'+codes[$('#list1').val()].unitPrice+'</td></tr>');
	});
});





