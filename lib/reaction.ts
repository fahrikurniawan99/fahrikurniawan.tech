interface Reaction {
  id: number;
  post_id: string;
  value: number;
  reaction_id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

interface MasterReactionValue {
  id: number;
  value: number;
  created_at: string;
  updated_at: string;
}
