import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

interface NavItem {
  label: string;
  icon: string;
  active: boolean;
}

interface Stat {
  label: string;
  valor: string;
  icon: string;
  tendencia: string;
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
  imports: [CommonModule, MatButtonModule],
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
    { label: 'Facturas este mes', valor: '24', icon: 'description', tendencia: '+6 respecto al mes pasado', tendenciaTipo: 'up' },
    { label: 'Con incidencias', valor: '3', icon: 'priority_high', tendencia: 'Requieren revisión', tendenciaTipo: 'warn' },
    { label: 'IVA repercutido', valor: '1.284 €', icon: 'euro', tendencia: 'Trimestre en curso', tendenciaTipo: '' },
    { label: 'Próximo plazo', valor: 'Modelo 303', icon: 'event', tendencia: 'Vence en 12 días', tendenciaTipo: 'warn' },
  ];

  facturasRecientes: FacturaResumen[] = [
    { numero: 'F-2026-0148', fecha: '9 sept. 2026', cliente: 'Estudio Marín SL', importe: '924,00 €', valida: true },
    { numero: 'F-2026-0147', fecha: '7 sept. 2026', cliente: 'Cafés Noroeste', importe: '310,50 €', valida: false },
    { numero: 'F-2026-0146', fecha: '5 sept. 2026', cliente: 'Bufete Larra', importe: '1.150,00 €', valida: true },
    { numero: 'F-2026-0145', fecha: '3 sept. 2026', cliente: 'Taller Ibáñez', importe: '245,00 €', valida: true },
    { numero: 'F-2026-0144', fecha: '1 sept. 2026', cliente: 'Estudio Marín SL', importe: '780,00 €', valida: false },
  ];

  proximosPlazos: Plazo[] = [
    { modelo: 'Modelo 303', descripcion: 'IVA — tercer trimestre', fecha: '21 oct.' },
    { modelo: 'Modelo 130', descripcion: 'IRPF — pago fraccionado', fecha: '21 oct.' },
    { modelo: 'Modelo 349', descripcion: 'Operaciones intracomunitarias', fecha: '20 nov.' },
  ];

  onSubirFactura(): void {
    // Conectar con la ruta/acción real de subida de factura
  }
}