import $ from 'jquery'

const loadHtmlSucessCallbacks = []

export function onLoadHtmlSucess(callback) {
    if(!loadHtmlSucessCallbacks.includes(callback)) {
        loadHtmlSucessCallbacks.push(callback)
    }
}

function loadIncludes(parent) {
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e) { //i = index, e = elemento (não é um elemento jquery)
        const url = $(e).attr('wm-include') //wrap no elemento, para então extrair o atributo facilmente com jquery
        $.ajax({    //chamada ajax via jquery (muito simples)
            url,    //objeto de configuração = {name: value, name: value, ...}
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include')

                loadHtmlSucessCallbacks.forEach(
                    callback => callback(data))
                loadIncludes(e)
            }
        })
    })
}

loadIncludes()