erDiagram
    PROFILES ||--o{ WARUNGS : "owns"
    PROFILES ||--o{ ALERTS : "reports"
    WARUNGS ||--o{ MENU_ITEMS : "contains"

    PROFILES {
        uuid id PK "Supabase Auth Link"
        string username "e.g., @ipan"
        string role "user | vendor | authority"
        string display_name
        timestamp created_at
    }

    WARUNGS {
        uuid id PK
        uuid owner_id FK
        string name "Warung Nasi Lemak Ipan"
        point location "lat, lng for 3D marker"
        text marketing_copy "AI Generated Manglish/Malay"
        string image_url "Photo of stall"
    }

    MENU_ITEMS {
        uuid id PK
        uuid warung_id FK
        string item_name
        float price
        text description
    }

    ALERTS {
        uuid id PK
        uuid reporter_id FK
        string type "flood | hazard"
        string severity "low | medium | high"
        point location "lat, lng for 3D red-pulse"
        string image_url "Flood photo"
        string status "active | verified | resolved"
        text ai_analysis "Gemini summary of the hazard"
    }

    DIALECT_GLOSSARY {
        uuid id PK
        string standard_malay
        string dialect_word
        string dialect_type "Kelantanese | Sarawakian"
        text usage_context
    }
