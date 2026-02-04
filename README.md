# Memorial Wall Application

A respectful, calm memorial wall application for sharing memories and reflections.

## Architecture

- **Backend**: Laravel 12 REST API
- **Frontend**: React with TypeScript and Vite
- **Database**: SQLite (development), MySQL/PostgreSQL (production)
- **Storage**: AWS S3 for media files

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install PHP dependencies:
   ```bash
   composer install
   ```

3. Copy the environment file and configure:
   ```bash
   cp .env.example .env
   ```

4. Generate application key:
   ```bash
   php artisan key:generate
   ```

5. Configure your database in `.env`:
   - For SQLite (default): `DB_CONNECTION=sqlite`
   - Create the database file: `touch database/database.sqlite`

6. Configure AWS S3 for media storage in `.env`:
   ```
   FILESYSTEM_DISK=s3
   AWS_ACCESS_KEY_ID=your_key_id
   AWS_SECRET_ACCESS_KEY=your_secret_key
   AWS_DEFAULT_REGION=us-east-1
   AWS_BUCKET=your_bucket_name
   ```

7. Run migrations and seed sample data:
   ```bash
   php artisan migrate --seed
   ```

8. Start the Laravel development server:
   ```bash
   php artisan serve
   ```

   The API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Copy the environment file and configure:
   ```bash
   cp .env.example .env
   ```

4. Update the API URL in `.env` if needed:
   ```
   VITE_API_URL=http://localhost:8000/api
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:8080`

## API Endpoints

### Memorials
- `GET /api/memorials/{slug}` - Get memorial details

### Memories
- `GET /api/memorials/{slug}/memories` - Get all memories for a memorial
- `POST /api/memorials/{slug}/memories` - Create a new memory (supports file upload)

### Reflections
- `GET /api/memories/{memory}/reflections` - Get reflections for a memory
- `POST /api/memories/{memory}/reflections` - Add a reflection to a memory

## Features

- **Memory Types**: Text, Image, Video, Quote
- **Reflections**: Single-level comments on memories
- **Media Upload**: Support for images (jpg, png, gif) and videos (mp4, webm)
- **Video Optimization**: Lazy loading with IntersectionObserver, metadata preload only
- **Chronological Display**: Oldest memories first, newest at the bottom
- **Rate Limiting**: API endpoints are rate-limited to prevent abuse
- **No Authentication**: Simple, anonymous sharing experience

## Database Schema

### memorials
- id
- name
- slug (unique)
- date_of_birth (nullable)
- date_of_passing (nullable)
- dedication (nullable)
- cover_image (nullable)
- created_at

### memories
- id
- memorial_id (foreign key)
- type (text|image|video|quote)
- content
- media_url (nullable)
- author_name (nullable)
- created_at

### reflections
- id
- memory_id (foreign key)
- content
- author_name (nullable)
- created_at

## Production Deployment

### Backend

1. Set `APP_ENV=production` and `APP_DEBUG=false` in `.env`
2. Configure your production database
3. Run migrations: `php artisan migrate --force`
4. Optimize for production:
   ```bash
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   ```

### Frontend

1. Build for production:
   ```bash
   npm run build
   ```

2. The `dist` directory will contain the production build
3. Serve the `dist` directory with any static file server (nginx, Apache, etc.)

## Seeded Data

The application comes with 2 sample memorials:
- **Eleanor Thompson** - A beloved teacher and grandmother
- **James "Jamie" Martinez** - A devoted father and passionate musician

Each memorial includes 10+ memories with reflections.

## Design Principles

This application follows a principle of **quiet dignity**:
- No social network features (likes, shares, etc.)
- No authentication or user profiles
- No editing or deleting after creation
- Calm, respectful visual design
- Focus on remembrance and reflection
