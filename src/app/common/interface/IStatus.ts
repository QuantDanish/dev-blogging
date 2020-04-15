export default interface IStatus {
  loading: boolean;
  success: boolean;
  failure: boolean;
  error?: string[];
}
