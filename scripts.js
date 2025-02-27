document.getElementById('formulario-pet').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const tipo = document.getElementById('tipo').value;
    const raca = document.getElementById('raca').value;
    const idade = document.getElementById('idade').value;
    const tutor = document.getElementById('tutor').value;

    const pet = {
        nome,
        tipo,
        raca,
        idade,
        tutor,
    };

    document.getElementById('formulario-pet').reset();
});

document.getElementById('foto').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const preview = document.getElementById('previa-foto');

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };

        reader.readAsDataURL(file);
    }
});