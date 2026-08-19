import { ComponentCategory } from "./types";

export const componentCategories: ComponentCategory[] = [
    {id: 'cpu', name: 'CPU', icon: 'Cpu'},
    {id: 'gpu', name: 'Видеокарта', icon: 'Monitor'},
    {id: 'motherboard', name: 'Материнская плата', icon: 'Server'},
    {id: 'ram', name: 'Оперативная память', icon: 'MemoryStick'},
    {id: 'storage', name: 'Накопитель', icon: 'HardDrive'},
    {id: 'psu', name: 'Блок Питания', icon: 'Zap'},
    {id: 'case', name: 'Корпус', icon: 'Box'},
    {id: 'cooling', name: 'Охлажнеие', icon: 'Fan'},
]