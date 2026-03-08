-- Supabase Schema for WiraRakyat

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- PROFILES: Link to Supabase Auth
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    username TEXT UNIQUE NOT NULL,
    role TEXT CHECK (role IN ('user', 'vendor', 'authority')) DEFAULT 'user',
    display_name TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- WARUNGS: SME metadata
CREATE TABLE IF NOT EXISTS warungs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    owner_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
    name TEXT NOT NULL,
    location JSONB NOT NULL, -- {lat: number, lng: number}
    marketing_copy TEXT, -- AI Generated Manglish/Malay
    image_url TEXT, -- Photo of stall
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- MENU_ITEMS: Items within a warung
CREATE TABLE IF NOT EXISTS menu_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    warung_id UUID REFERENCES warungs(id) ON DELETE CASCADE NOT NULL,
    item_name TEXT NOT NULL,
    price NUMERIC NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ALERTS: Disaster/Flood reporting
CREATE TABLE IF NOT EXISTS alerts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    reporter_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    type TEXT CHECK (type IN ('flood', 'hazard')) NOT NULL,
    severity TEXT CHECK (severity IN ('low', 'medium', 'high')) NOT NULL,
    location JSONB NOT NULL, -- {lat: number, lng: number}
    image_url TEXT, -- Flood photo
    status TEXT CHECK (status IN ('active', 'verified', 'resolved')) DEFAULT 'active',
    ai_analysis TEXT, -- Gemini summary of the hazard
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- DIALECT_GLOSSARY: Localization data
CREATE TABLE IF NOT EXISTS dialect_glossary (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    standard_malay TEXT NOT NULL,
    dialect_word TEXT NOT NULL,
    dialect_type TEXT CHECK (dialect_type IN ('Kelantanese', 'Sarawakian')) NOT NULL,
    usage_context TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Realtime for Alerts
ALTER PUBLICATION supabase_realtime ADD TABLE alerts;
ALTER PUBLICATION supabase_realtime ADD TABLE warungs;
