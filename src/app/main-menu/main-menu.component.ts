import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent implements OnInit{
company:string | undefined
username:string | undefined
user:string | undefined
listItemsCatalog: string[] = ["Proveedores","Líneas"];

  ngOnInit(): void {
    this.company = sessionStorage.getItem('company')!+', '+sessionStorage.getItem('branch')
    this.user = "Usuario: "+ sessionStorage.getItem('user')!
  }

  onClickExpandMenu(btn:string){
    
    const submenu = document.querySelector('.submenu-oculto') as HTMLElement;
    const submenuInterno = document.querySelector('.submenu-oculto ul') as HTMLElement;

    switch(btn){
      case 'Catalogo':
      submenuInterno.innerHTML = ""

      // Usar forEach para recorrer la lista e imprimir cada elemento
      this.listItemsCatalog.forEach((item: string) => {

        const nuevoLi = document.createElement('li');
        const nuevoEnlace = document.createElement('a');
        nuevoLi.appendChild(nuevoEnlace)
        nuevoEnlace.textContent = item;
        nuevoLi.style.marginTop = '10%'
      

        nuevoEnlace.style.color = '#ffffff'
        nuevoEnlace.style.width= '100%'
        nuevoEnlace.style.cursor = 'pointer'

        nuevoEnlace.addEventListener('click', () => {
          this.onClickMenuItem(item)
        });

        submenuInterno.appendChild(nuevoLi);
      });

        const btnCatalogo = document.querySelector('.Catalog') as HTMLElement;
    
        if (submenu?.style.width === '0px' || submenu?.style.width === '') {
          submenu.style.width = '10%'; 
          btnCatalogo.style.background = '#CC9E9E';
        } else {
          if (submenu != null){
            submenu.style.width = '0';
            btnCatalogo.style.background = '#4E4E53';
          }
        }

      break;
    }
  }

  onClickMenuItem(btn:string){

    // Catalogo
     if(this.listItemsCatalog.includes(btn)){

     }
    

  }


}
