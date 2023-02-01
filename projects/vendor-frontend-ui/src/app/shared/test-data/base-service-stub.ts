import { of } from 'rxjs';

export const baseServiceStub = {
  getTenant: jest.fn().mockReturnValue(of([])),
  handleError: jest.fn().mockReturnValue(of([])),
  showError: jest.fn().mockReturnValue(of([])),
  get: jest.fn().mockReturnValue(of([])),
  post: jest.fn().mockReturnValue(of([])),
};
