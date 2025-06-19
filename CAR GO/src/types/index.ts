export interface Vehicle {
  id: string;
  name: string;
  type: 'EV' | 'Gas';
  image: string;
  specs: {
    acceleration: string;
    power: string;
    range?: string;
    fuelEconomy?: string;
  };
  price: string;
  category: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface Testimonial {
  id: string;
  name: string;
  vehicle: string;
  rating: number;
  comment: string;
  image: string;
  vehicleType: 'EV' | 'Gas';
}

export interface Brand {
  name: string;
  logo: string;
  type: 'EV' | 'Gas' | 'Both';
}

export interface Stat {
  value: string;
  label: string;
  icon: string;
}