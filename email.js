function enviarEmail() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    const body = `Nome: ${nome}\nTelefone: ${telefone}\nE-mail: ${email}\nMensagem: ${mensagem}`;
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=lc.becafig@gmail.com&su=${encodeURIComponent(assunto)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, '_blank');
}