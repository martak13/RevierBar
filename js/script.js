let emotion;
$('.emotions__emotion').click((e) => {
    $('.emotions__emotion').removeClass('selected')
    emotion = $(e.currentTarget).addClass('selected') .children().last().text()
})
$('.review__send').click(() => {
    if (!emotion) {
        return
    }
    $('.review').css('display', 'none')
    $('.feedback').css('display', 'flex')
    $('#Feedback').text('Feedback: '+emotion)
})