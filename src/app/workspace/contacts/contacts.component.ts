import {Component} from '@angular/core';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})


export class ContactsComponent {

  selectedFile!: File;
  contacts: any[] = [
    { name: 'People1', email: '@example.com', phone: '+70000000001' },
    { name: 'People2', email: '@example.com', phone: '+70000000000' },
  ];

  selectFile() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }

  ChangeInput(event: any) {
    this.selectedFile = event.target.files[0];
      //тут действия с файлом
  }

  onFileDropped(event: any) {
    event.preventDefault();
    this.selectedFile = event.dataTransfer.files[0];
    // действия с файлом
    console.log('Файл загружен:', this.selectedFile);
  }

  onDragOver(event: any) {
    event.preventDefault();
    console.log('Файл над зоной');
  }

  onDragLeave(event: any) {
    event.preventDefault();
  }


}
