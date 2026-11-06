create extension if not exists pgcrypto;

create table if not exists public.solicitudes_contacto (
  id uuid primary key default gen_random_uuid(),
  nombre_apellido text not null,
  empresa text,
  correo text not null,
  telefono text,
  tipo_ayuda text not null,
  descripcion text not null,
  consentimiento boolean not null default false,
  estado text not null default 'pendiente',
  fecha_creacion timestamptz not null default now(),
  correo_notificado boolean not null default false,
  correo_notificado_en timestamptz,
  error_notificacion text,
  constraint solicitudes_contacto_consentimiento_check
    check (consentimiento = true),
  constraint solicitudes_contacto_estado_check
    check (estado in ('pendiente', 'en_proceso', 'respondida', 'cerrada'))
);

alter table public.solicitudes_contacto
  add column if not exists correo_notificado boolean not null default false,
  add column if not exists correo_notificado_en timestamptz,
  add column if not exists error_notificacion text;

create index if not exists solicitudes_contacto_fecha_idx
  on public.solicitudes_contacto (fecha_creacion desc);

create index if not exists solicitudes_contacto_estado_idx
  on public.solicitudes_contacto (estado);

alter table public.solicitudes_contacto enable row level security;
