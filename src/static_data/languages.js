export const language = {
    JAVA: {
        name: 'Java',
        color: '#b07219'
    },
    JS: {
        name: 'JavaScript',
        color: '#f1e05a'
    },
    PYTHON: {
        name: 'Python',
        color: '#3572a5'
    },
    SQL: {
        name: 'SQL',
        color: '#cccccc'
    },
    ELIXIR: {
        name: 'Elixir',
        color: '#6e4a7e'
    } ,
    ERLANG: {
        name: 'Erlang',
        color: '#b83998'
    },
    HTML: {
        name: 'HTML',
        color: '#e34c26'
    },
}

export const parseString = (string) => {
    switch (string) {
        case 'JAVA': return language.JAVA;
        case 'JS': return language.JS;
        case 'PYTHON': return language.PYTHON;
        case 'SQL': return language.SQL;
        case 'ELIXIR': return language.ELIXIR;
        case 'ERLANG': return language.ERLANG;
        case 'HTML': return language.HTML;
        default: return null;
    }
}