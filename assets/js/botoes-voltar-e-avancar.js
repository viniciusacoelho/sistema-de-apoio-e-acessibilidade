/*---INDEX---*/
function avancarPaginaIndex() {
    window.location.href = "/sobre";
}

/*---SOBRE---*/
function voltarPaginaSobre() {
    window.location.href = "/";
}

function avancarPaginaSobre() {
    window.location.href = "/encontre-suporte";
}

/*---ENCONTRE SUPORTE---*/
function voltarPaginaEncontreSuporte() {
    window.location.href = "/sobre";
}

function avancarPaginaEncontreSuporte() {
    window.location.href = "/servicos";
}
/*Sessenta Anos ou Mais*/
function voltarPaginaSessentaAnosOuMais() {
    window.location.href = "/encontre-suporte";
}

function avancarPaginaSessentaAnosOuMais() {
    window.location.href = "/deficiente-auditivo";
}
/*Deficiente Auditivo*/
function voltarPaginaDefAuditivo() {
    window.location.href = "/sessenta-anos-ou-mais";
}

function avancarPaginaDefAuditivo() {
    window.location.href = "/deficiente-fisico-ou-motoro";
}
/*Deficiente Físico ou Motoro*/
function voltarPaginaDefFisicoOuMotoro() {
    window.location.href = "/deficiente-auditivo";
}

/*---SERVIÇOS---*/
function voltarPaginaServicos() {
    window.location.href = "/encontre-suporte";
}
/*Inclusão*/
function voltarPaginaInclusao() {
    window.location.href = "/servicos";
}
/*Notificação*/
function voltarPaginaNotificacao() {
    window.location.href = "/servicos";
}

function avancarPaginaServicos() {
    window.location.href = "/contato";
}

/*---CONTATO---*/
function voltarPaginaContato() {
    window.location.href = "/servicos";
}




/*---ACESSIBILIDADE---*/
function voltarPaginaAcessibilidade() {
    if (document.referrer) { 
        window.history.back(); 
    } else { 
        window.location.href = "/"; 
    } 
}