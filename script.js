function submitForm() {

    var name = document.getElementById('name').value;
    var roll_no = document.getElementById('rollNo').value;
    var branch = document.getElementById('branch').value;
    var semester = document.getElementById('semester').value;
    var section = document.getElementById('section').value;

    var displayArea = document.getElementById('displayArea');
    displayArea.innerHTML = `
    
        <h1 style="margin-top: 10px;">Saved Details</h1>
        <br>
        <p><strong>Name </strong> ${name}</p><br>
        <p><strong>Roll No </strong> ${roll_no}</p><br>
        <p><strong>Branch </strong> ${branch}</p><br>
        <p><strong>Semester </strong> ${semester}</p><br>
        <p><strong>Section </strong> ${section}</p><br>
    `;

    var studentForm = document.getElementById('studentForm');
    studentForm.style.display = 'none';

    displayArea.style.display = 'block';

   
}
