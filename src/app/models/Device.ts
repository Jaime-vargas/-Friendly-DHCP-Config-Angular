export interface Device {
  id: number;
  category: string;
  name: string;
  mac_address: string;
  ip_address: string;
  network_id: number;
  managed: boolean;
  network_name: string;
}
