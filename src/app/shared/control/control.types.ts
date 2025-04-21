export interface Input {
  label: string;
  for: string;
  name: string;
  id: string;
  type: 'text' | 'number' | 'email' | 'password';
  placeholder: string;
  value: string;
  disabled: boolean;
  required: boolean;
}
