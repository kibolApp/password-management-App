<?php

namespace App\Http\Controllers;

use App\Models\Password;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PasswordController extends Controller
{
    
    public function show(Request $request)
    {
     
        $validatedData = $request->validate([
            'user_id' => 'required',
        ]);
    
        $userId = $validatedData['user_id'];
        $passwords = Password::where('user_id', $userId)->pluck('saved_passwords')->toArray();

        return response()->json(['passwords' => $passwords], 200);
    }

    public function update(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required',
            'oldpassword' => '',
            'newpassword' => 'required',
        ]);

        $userId = $validatedData['user_id'];
        $newPassword = $validatedData['newpassword'];
        $oldPassword = $validatedData['oldpassword'];

        if (empty($oldPassword)) {
            $passwordsCount = Password::where('user_id', $userId)->count();

            if ($passwordsCount >= 8) {
                return response()->json(['error' => 'User already has 8 passwords stored'], 400);
            }

            Password::create([
                'user_id' => $userId,
                'saved_passwords' => $newPassword
            ]);

            return response()->json(['message' => 'Password added successfully'], 200);
        } else {
            $password = Password::where('user_id', $userId)
                                ->where('saved_passwords', $oldPassword)
                                ->first();

            if (!$password) {
                return response()->json(['error' => 'Old password not found'], 404);
            }

            $password->update([
                'saved_passwords' => $newPassword
            ]);

            return response()->json(['message' => 'Password updated successfully'], 200);
        }
    }


    public function delete(Request $request)
        {
            $validatedData = $request->validate([
                'user_id' => 'required',
                'password' => 'required',
            ]);

            $userId = $validatedData['user_id'];
            $passwordToDelete = $validatedData['password'];

            
            $password = Password::where('user_id', $userId)
                                ->where('saved_passwords', $passwordToDelete)
                                ->first();


            if (!$password) {
                return response()->json(['error' => 'Password not found for the user'], 404);
            }

            
            $password->delete();

            return response()->json(['message' => 'Password deleted successfully'], 200);
        }
    
}