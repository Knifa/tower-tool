import bpy
import os

from mathutils import Vector
from math import radians, sqrt, sin, cos, tan, pi


CAM_DEGREES = radians(75)
 

def set_active_obj(obj):
    bpy.context.view_layer.objects.active = obj

def delete_old_stl():
    old_stl = bpy.data.objects.get("STL")
    if (old_stl):
        bpy.data.objects.remove(old_stl)
    
delete_old_stl()

stl_path = "C:/Users/Knifa/Desktop/overhang_tower.stl"
bpy.ops.import_mesh.stl(filepath=stl_path)

stl_obj_name = bpy.path.display_name(os.path.basename(stl_path))
stl_obj = bpy.data.objects[stl_obj_name]
stl_obj.name = "STL"
set_active_obj(stl_obj)

bpy.ops.object.origin_set(center="BOUNDS")
stl_obj_max_dim = max(stl_obj.dimensions)
[_, a, b] = sorted(stl_obj.dimensions)
#stl_obj.location[2] = -stl_obj_sorted_dims[2] / 2

offset = b * 0.7 
stl_obj.location[2] = offset / 2
[_, a, b] = [_, a, b - offset]

mat = bpy.data.materials["STL"]
stl_obj.data.materials.append(mat)
 
cam_obj = bpy.data.objects["Camera"]
cam_obj.rotation_euler = [CAM_DEGREES, 0,  0]
cam_obj.location = [
    0, 
    sin(CAM_DEGREES) * -b*2, 
    cos(CAM_DEGREES) * b*2
]

cam_cam = bpy.data.cameras["Camera"]
cam_cam.type = "ORTHO"

cam_cam.ortho_scale = (
    (sqrt(2) * a * tan(pi / 2 - CAM_DEGREES) + b) * sin(CAM_DEGREES)
)

plane_obj = bpy.data.objects["Plane"]
plane_obj.location[2] = -stl_obj.dimensions[2] / 2;

stl_obj.rotation_euler.z = 0
bpy.context.view_layer.update()
stl_obj.keyframe_insert(data_path="rotation_euler", frame=0, index=-1)

stl_obj.rotation_euler.z = 2 * pi
bpy.context.view_layer.update()
stl_obj.keyframe_insert(data_path="rotation_euler", frame=120 , index=-1)

fcurves = stl_obj.animation_data.action.fcurves
for fcurve in fcurves:
    for kf in fcurve.keyframe_points:
        kf.interpolation = 'LINEAR'

stl_path_dir = os.path.dirname(stl_path)
stl_path_base = os.path.basename(stl_path)
stl_path_no_ext = os.path.splitext(stl_path_base)[0]
output_path = os.path.join(stl_path_dir, stl_path_no_ext + ".webm")
bpy.context.scene.render.filepath = output_path