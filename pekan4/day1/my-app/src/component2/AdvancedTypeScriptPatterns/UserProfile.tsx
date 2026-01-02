import React from 'react';

interface UserDetail {
  id: string;
  username: string;
  email: string;
  phoneNumber: string;
  address: string;
  joinedDate: string;
}

// Utility Types: Hanya ambil 'username' dan 'email' dari UserDetail
type UserBasicInfo = Pick<UserDetail, 'username' | 'email'>;

// Utility Types: Semua field UserDetail tapi opsional (cocok untuk form edit)
type UserUpdatePayload = Partial<UserDetail>;

// Type Guard: Mengecek apakah objek adalah Error asli
function isNativeError(error: unknown): error is Error {
  return error instanceof Error;
}

const UserProfile: React.FC<{ info: UserBasicInfo }> = ({ info }) => {
  return (
    <div>
      <h4>{info.username}</h4>
      <p>{info.email}</p>
    </div>
  );
};

// Record: Membuat objek mapping yang kaku
const RoleDescriptions: Record<'admin' | 'user' | 'guest', string> = {
  admin: 'Akses penuh ke sistem',
  user: 'Akses standar pengguna',
  guest: 'Hanya baca (Read-only)'
};