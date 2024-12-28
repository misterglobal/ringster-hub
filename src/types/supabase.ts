export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      subscription_plans: {
        Row: {
          id: string
          name: string
          price: number
          billing_interval: 'month' | 'year'
          stripe_price_id: string
          features: string[]
          is_active: boolean
          max_agents: number
          minutes_allowance: number
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          price: number
          billing_interval: 'month' | 'year'
          stripe_price_id: string
          features?: string[]
          is_active?: boolean
          max_agents: number
          minutes_allowance: number
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          price?: number
          billing_interval?: 'month' | 'year'
          stripe_price_id?: string
          features?: string[]
          is_active?: boolean
          max_agents?: number
          minutes_allowance?: number
          created_at?: string | null
          updated_at?: string | null
        }
      }
      organizations: {
        Row: {
          id: string
          name: string
          owner_id: string
          subscription_plan_id: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          owner_id: string
          subscription_plan_id?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          owner_id?: string
          subscription_plan_id?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "organizations_subscription_plan_id_fkey"
            columns: ["subscription_plan_id"]
            isOneToOne: true
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          }
        ]
      }
      organization_members: {
        Row: {
          organization_id: string
          user_id: string
          role: string
          created_at?: string
        }
        Insert: {
          organization_id: string
          user_id: string
          role: string
          created_at?: string
        }
        Update: {
          organization_id?: string
          user_id?: string
          role?: string
          created_at?: string
        }
      }
      agent_configs: {
        Row: {
          id: string
          name: string
          phone_number: string | null
          description: string | null
          greeting: string | null
          goodbye: string | null
          status: 'active' | 'inactive' | 'draft' | 'maintenance'
          organization_id: string
          config: Json
          transfer_directory: Json
          minutes_used: number
          total_minutes_used: number
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          phone_number?: string | null
          description?: string | null
          greeting?: string | null
          goodbye?: string | null
          status?: 'active' | 'inactive' | 'draft' | 'maintenance'
          organization_id: string
          config?: Json
          transfer_directory?: Json
          minutes_used?: number
          total_minutes_used?: number
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          phone_number?: string | null
          description?: string | null
          greeting?: string | null
          goodbye?: string | null
          status?: 'active' | 'inactive' | 'draft' | 'maintenance'
          organization_id?: string
          config?: Json
          transfer_directory?: Json
          minutes_used?: number
          total_minutes_used?: number
          created_at?: string | null
          updated_at?: string | null
        }
      }
    }
  }
}