import {
  getAllProducts,
  getProduct,
  addProduct,
  updateProductDetails,
  updateProductMainImage,
  updateProductImages,
  deleteProduct
} from './product.controller';
import {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  sendVerificationEmail,
  verifyEmail
} from './auth.controller';
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
} from './user.controller';

import {
  getAllCategories,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory
} from './category.controller';

const authController = {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  sendVerificationEmail,
  verifyEmail
};

const userController = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
};

const categoryController = {
  getAllCategories,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory
};

const productController = {
  getAllProducts,
  getProduct,
  addProduct,
  updateProductDetails,
  updateProductMainImage,
  updateProductImages,
  deleteProduct
};

export {
  authController,
  userController,
  productController,
  categoryController
};
