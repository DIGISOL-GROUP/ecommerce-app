import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Shipment {
  shipping_id: string;
  order_id: string;
  carrier: string;
  tracking_number: string;
  status: string;
  estimated_delivery: string;
}

interface ShipmentsState {
  shipments: Shipment[];
}

const initialState: ShipmentsState = {
  shipments: [],
};

const shipmentsSlice = createSlice({
  name: 'shipments',
  initialState,
  reducers: {
    addShipment: (state, action: PayloadAction<Shipment>) => {
      state.shipments.push(action.payload);
    },
    updateShipmentStatus: (state, action: PayloadAction<{ shipping_id: string; status: string }>) => {
      const shipment = state.shipments.find(s => s.shipping_id === action.payload.shipping_id);
      if (shipment) {
        shipment.status = action.payload.status;
      }
    },
    setShipments: (state, action: PayloadAction<Shipment[]>) => {
      state.shipments = action.payload;
    },
  },
});

export const { addShipment, updateShipmentStatus, setShipments } = shipmentsSlice.actions;

export default shipmentsSlice.reducer;