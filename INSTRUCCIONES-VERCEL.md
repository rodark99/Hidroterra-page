# Publicar Hidroterra en Vercel

Este paquete ya usa la compilación estándar de Next.js. No utiliza
`scripts/build-verified.sh` ni `sites-env.sh`.

## 1. Reemplazar el contenido del repositorio

Descomprime este ZIP. En GitHub, el archivo `package.json` debe quedar en la
raíz del repositorio, no dentro de otra carpeta adicional. Reemplaza los
archivos anteriores por el contenido de la carpeta `Hidroterra-Vercel`.

No subas el ZIP como un solo archivo: debes subir sus archivos y carpetas.

## 2. Configurar Vercel

- Framework Preset: `Next.js`
- Root Directory: `./`
- Build Command: `npm run build`
- Output Directory: dejar vacío
- Install Command: `npm install`

## 3. Variables de entorno

En Vercel, abre `Settings > Environment Variables` y agrega:

```env
SUPABASE_URL=https://TU-PROYECTO.supabase.co
SUPABASE_SECRET_KEY=sb_secret_TU_CLAVE
```

Marca Production, Preview y Development. Después crea un nuevo despliegue.

Las variables de Resend son opcionales mientras no esté verificado el dominio.

## 4. Base de datos

Ejecuta `supabase-contacto.sql` una vez en el SQL Editor de Supabase.

## 5. Verificación

En el registro correcto de Vercel debe aparecer:

```text
> next build
```

No debe aparecer:

```text
> bash scripts/build-verified.sh
```
