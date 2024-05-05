<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Password extends Model
{
    use HasFactory;
    protected $table = 'saved_passwords';

    protected $fillable = [
        'user_id',
        'saved_passwords',
    ];

   
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}