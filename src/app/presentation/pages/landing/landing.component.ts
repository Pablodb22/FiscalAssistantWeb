import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface CampoFactura {
  nombre: string;
  valor: string;
  ok: boolean;
}

interface Paso {
  titulo: string;
  descripcion: string;
}

interface Funcion {
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  demoInvoice = {
    numero: 'F-2026-0148',
    estado: 'Válida',
    total: '924,00 €',
    campos: [
      { nombre: 'NIF del emisor', valor: 'B12345678', ok: true },
      { nombre: 'Número de serie', valor: 'Correcto', ok: true },
      { nombre: 'Tipo de IVA', valor: 'Revisar 10%', ok: false },
      { nombre: 'Base imponible', valor: '840,00 €', ok: true },
    ] as CampoFactura[]
  };

  pasos: Paso[] = [
    {
      titulo: 'Sube la factura',
      descripcion: 'Arrastra el PDF o la foto de la factura. Aclara extrae los datos automáticamente, sin rellenar formularios.'
    },
    {
      titulo: 'Se valida frente a la normativa',
      descripcion: 'Cada campo se contrasta con los requisitos del RD 1619/2012 y se calcula el IVA correspondiente.'
    },
    {
      titulo: 'Recibes el resultado explicado',
      descripcion: 'Sabrás exactamente qué está bien, qué falta y por qué — con una explicación en lenguaje llano, no en jerga legal.'
    }
  ];

  funciones: Funcion[] = [
    { titulo: 'Validación normativa', descripcion: 'Comprueba todos los campos obligatorios de una factura según la ley española vigente.' },
    { titulo: 'Cálculo automático de IVA', descripcion: 'Desglose claro de base imponible, tipo aplicado y total, sin errores de cálculo manual.' },
    { titulo: 'Historial de facturas', descripcion: 'Consulta cualquier factura procesada y su resultado, ordenado por fecha y estado.' },
    { titulo: 'Explicaciones en claro', descripcion: 'Cada error o advertencia se explica en una frase, sin remitirte a un artículo de ley.' },
    { titulo: 'Recordatorios de plazos', descripcion: 'Avisos antes de cada modelo trimestral, para no descubrir la fecha límite el mismo día.' },
    { titulo: 'Exportable a tu gestor', descripcion: 'Comparte el resultado con tu gestoría en un formato que pueden usar directamente.' },
  ];

  onProbar(): void {
    // Conectar con la ruta/acción real de subida de factura
  }
}