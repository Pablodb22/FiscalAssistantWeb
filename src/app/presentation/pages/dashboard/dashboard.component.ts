import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgxDropzoneModule, NgxDropzoneChangeEvent } from 'ngx-dropzone';

interface NavItem {
  label: string;
  icon: string;
  active: boolean;
}

interface Stat {
  label: string;
  valor: string;
  icon: string;
  tendenciaTipo: 'up' | 'warn' | '';
}

interface FacturaResumen {
  numero: string;
  fecha: string;
  cliente: string;
  importe: string;
  valida: boolean;
}

interface Plazo {
  modelo: string;
  descripcion: string;
  fecha: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatButtonModule, NgxDropzoneModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  usuario = {
    nombre: 'Hola',
    rol: 'Autónomo · Epígrafe 763',
    iniciales: 'HR'
  };

  fechaHoy = 'Martes, 9 de septiembre de 2026';

  navItems: NavItem[] = [
    { label: 'Resumen', icon: 'space_dashboard', active: true },
    { label: 'Facturas', icon: 'description', active: false },
    { label: 'Plazos', icon: 'event', active: false },
    { label: 'Informes', icon: 'bar_chart', active: false },
    { label: 'Ajustes', icon: 'settings', active: false },
  ];

  stats: Stat[] = [
    { label: 'Facturas este mes', valor: '24', icon: 'description', tendenciaTipo: 'up' },
    { label: 'Con incidencias', valor: '3', icon: 'priority_high', tendenciaTipo: 'warn' },
    { label: 'IVA repercutido', valor: '1.284 €', icon: 'euro', tendenciaTipo: '' },
    { label: 'Próximo plazo', valor: 'Modelo 303', icon: 'event', tendenciaTipo: 'warn' },
  ];

  facturasRecientes: FacturaResumen[] = [
    { numero: 'F-2026-0148', fecha: '9 sept. 2026', cliente: 'Estudio Marín SL', importe: '924,00 €', valida: true },
    { numero: 'F-2026-0147', fecha: '7 sept. 2026', cliente: 'Cafés Noroeste', importe: '310,50 €', valida: false },
    { numero: 'F-2026-0146', fecha: '5 sept. 2026', cliente: 'Bufete Larra', importe: '1.150,00 €', valida: true },
    { numero: 'F-2026-0145', fecha: '3 sept. 2026', cliente: 'Taller Ibáñez', importe: '245,00 €', valida: true },
    { numero: 'F-2026-0144', fecha: '1 sept. 2026', cliente: 'Estudio Marín SL', importe: '780,00 €', valida: false },
  ];

  proximosPlazos: Plazo[] = [
    { modelo: 'Modelo 303', descripcion: 'IVA — pago trimestral (3T)', fecha: '20 oct.' },
    { modelo: 'Modelo 130', descripcion: 'IRPF — pago fraccionado (3T)', fecha: '20 oct.' },
    { modelo: 'Modelo 111', descripcion: 'Retenciones IRPF — trabajadores y profesionales (3T)', fecha: '20 oct.' },
    { modelo: 'Modelo 349', descripcion: 'Operaciones intracomunitarias (3T)', fecha: '20 oct.' },
    { modelo: 'Modelo 390', descripcion: 'Resumen anual de IVA', fecha: '30 ene.' },
    { modelo: 'Modelo 347', descripcion: 'Operaciones con terceros > 3.005,06 €', fecha: '28 feb.' },
    { modelo: 'Modelo 100', descripcion: 'Declaración de la Renta (IRPF anual)', fecha: '30 jun.' },
  ];

  // Archivos subidos mediante ngx-dropzone
  files: File[] = [];

  onSelect(event: NgxDropzoneChangeEvent): void {
    this.files.push(...event.addedFiles);
    // Aquí conectas con tu servicio real: subir this.files al backend (Spring Boot)
    // y disparar la extracción/validación de la factura.
  } 

  onRemove(file: File): void {
    this.files.splice(this.files.indexOf(file), 1);
  }

  enviarDocumento(): void {

  if (this.files.length === 0) {
    return;
  }

  const file = this.files[0];

  console.log('Enviando documento:', file.name);

  // Aquí posteriormente haces la llamada al backend
}
}