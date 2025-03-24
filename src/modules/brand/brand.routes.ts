import express from 'express';
import BrandService from "./brand.service";

const router = express.Router();
const brandService = new BrandService({ 
  manager: {}, // Add required container properties
  repositories: {} 
});

router.post('/', async (req, res) => {
  try {
    const brand = await brandService.createBrands(req.body);
    res.status(201).json({ brand });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const brands = await brandService.listBrands();
    res.json({ brands });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const brand = await brandService.retrieveBrand(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }
    res.json({ brand });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedBrand = await brandService.updateBrands({ id: req.params.id }, req.body);
    res.json({ brand: updatedBrand });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await brandService.deleteBrands(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router; 