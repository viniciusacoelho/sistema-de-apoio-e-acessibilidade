const input = document.getElementById("image");
const fileName = document.getElementById("file-name");
const preview = document.getElementById("preview");

input.addEventListener("change", () => {
    if (input.files.length > 0) {
        const file = input.files[0];

        // Atualiza nome do arquivo
        fileName.textContent = file.name;

        // Mostra preview
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = "block";
        }

        reader.readAsDataURL(file);
    } else {
        fileName.textContent = "Nenhum arquivo selecionado";
        preview.style.display = "none";
    }
});